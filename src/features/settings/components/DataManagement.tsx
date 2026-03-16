import { useState } from 'react';
import { db } from '../../../lib/db';
import { seedDemoData } from '../../../lib/demoData';

export default function DataManagement() {
  const [isExporting, setIsExporting] = useState(false);
  const [isImporting, setIsImporting] = useState(false);
  const [isSeeding, setIsSeeding] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: 'info' | 'error' } | null>(null);

  const handleExport = async () => {
    setIsExporting(true);
    try {
      const data = {
        sessions: await db.sessions.toArray(),
        urges: await db.urges.toArray(),
        reflections: await db.reflections.toArray(),
        settings: await db.settings.toArray(),
        exportedAt: new Date().toISOString(),
        version: 3
      };

      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `boredom-gym-export-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      setMessage({ text: 'Export failed.', type: 'error' });
    } finally {
      setIsExporting(false);
    }
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsImporting(true);
    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        const data = JSON.parse(event.target?.result as string);
        if (!data.sessions || !data.urges) throw new Error('Invalid format');

        await db.transaction('rw', [db.sessions, db.urges, db.reflections, db.settings], async () => {
          await db.sessions.clear();
          await db.urges.clear();
          await db.reflections.clear();
          await db.settings.clear();

          await db.sessions.bulkAdd(data.sessions);
          await db.urges.bulkAdd(data.urges);
          if (data.reflections) await db.reflections.bulkAdd(data.reflections);
          if (data.settings) await db.settings.bulkAdd(data.settings);
        });
        setMessage({ text: 'Data imported successfully! Refreshing...', type: 'info' });
        setTimeout(() => window.location.reload(), 1000);
      } catch {
        setMessage({ text: 'Import failed. Please ensure the file is valid.', type: 'error' });
      } finally {
        setIsImporting(false);
      }
    };
    reader.readAsText(file);
  };

  const handleSeed = async () => {
    if (!window.confirm('This will add realistic sample data for showcase purposes. Continue?')) return;
    
    setIsSeeding(true);
    try {
      await seedDemoData();
      setMessage({ text: 'Sample data loaded. Refreshing...', type: 'info' });
      setTimeout(() => window.location.reload(), 1000);
    } catch {
      setMessage({ text: 'Failed to load sample data.', type: 'error' });
    } finally {
      setIsSeeding(false);
    }
  };

  const handleClear = async () => {
    if (confirm('Are you absolutely sure? This will delete all your local history and cannot be undone.')) {
      await db.sessions.clear();
      await db.urges.clear();
      await db.reflections.clear();
      await db.settings.clear();
      window.location.reload();
    }
  };

  return (
    <div className="space-y-8">
      <div className="px-2">
        <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-400">Data Management</h3>
      </div>
      
      {message && (
        <div className={`p-4 rounded-2xl text-sm animate-in fade-in slide-in-from-top-1 ${
          message.type === 'error' ? 'bg-red-50 text-red-600 border border-red-100' : 'bg-zinc-50 text-zinc-600 border border-zinc-100'
        }`}>
          {message.text}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Showcase Mode */}
        <div className="card-premium space-y-6 bg-zinc-50/30">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-zinc-900 uppercase tracking-widest">Showcase Mode</p>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">Inject realistic sample records to see how the app looks with history.</p>
          </div>
          <button 
            onClick={handleSeed}
            disabled={isSeeding}
            className="w-full btn-premium-light disabled:opacity-50"
          >
            {isSeeding ? 'Seeding...' : 'Load Sample Data'}
          </button>
        </div>

        {/* Export */}
        <div className="card-premium space-y-6 bg-white">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-zinc-900 uppercase tracking-widest">Export</p>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">Save a copy of your journey to your device as a JSON file.</p>
          </div>
          <button 
            onClick={handleExport}
            disabled={isExporting}
            className="w-full btn-premium-light"
          >
            {isExporting ? 'Preparing...' : 'Export JSON'}
          </button>
        </div>

        {/* Restore */}
        <div className="card-premium space-y-6 bg-white">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-zinc-900 uppercase tracking-widest">Restore</p>
            <p className="text-xs text-zinc-400 leading-relaxed font-light">Import your history from a previously exported backup file.</p>
          </div>
          <div className="relative">
            <input 
              type="file" 
              accept=".json"
              onChange={handleImport}
              className="absolute inset-0 opacity-0 cursor-pointer disabled:cursor-not-allowed"
              disabled={isImporting}
            />
            <button className="w-full btn-premium-light">
              {isImporting ? 'Importing...' : 'Select File'}
            </button>
          </div>
        </div>

        {/* Clear All */}
        <div className="card-premium space-y-6 border-red-100 bg-red-50/5 shadow-red-900/5">
          <div className="space-y-1">
            <p className="text-sm font-semibold text-red-900 uppercase tracking-widest">Danger Zone</p>
            <p className="text-xs text-red-500/70 leading-relaxed font-light">Irreversibly delete all your local history from this device.</p>
          </div>
          <button 
            onClick={handleClear}
            className="w-full btn-premium-light text-red-600 border-red-100 hover:bg-red-50 hover:text-red-700"
          >
            Clear Local Data
          </button>
        </div>
      </div>
    </div>
  );
}
