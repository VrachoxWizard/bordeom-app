import ReflectionForm from '../features/reflection/components/ReflectionForm';

export default function Reflection() {
  return (
    <div className="max-w-4xl mx-auto space-y-16 py-8">
      <header className="text-center space-y-4">
        <h1 className="text-3xl font-medium tracking-tight">Daily Reflection</h1>
        <p className="text-zinc-500 mx-auto max-w-sm">
          Gentle review of your day's journey. 
          Notice without judgment, then let it be.
        </p>
      </header>

      <ReflectionForm />
    </div>
  );
}
