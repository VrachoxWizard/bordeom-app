import SettingsForm from '../features/settings/components/SettingsForm';
import DataManagement from '../features/settings/components/DataManagement';

export default function Settings() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-8">
      <header className="text-center space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Settings</h1>
        <p className="text-zinc-500 mx-auto max-w-sm">
          Experience preferences and local data control.
          Your data never leaves this device.
        </p>
      </header>

      <div className="space-y-20">
        <SettingsForm />
        <DataManagement />
      </div>
    </div>
  );
}
