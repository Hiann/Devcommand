export const getCategoryColor = (category: string): string => {
  const colors: Record<string, string> = {
    'Navegação': 'text-blue-400',
    'Edição': 'text-green-400',
    'Terminal': 'text-yellow-400',
    'Git': 'text-orange-400',
    'Busca': 'text-purple-400',
    'Formatação': 'text-pink-400',
    'Sistema': 'text-cyan-400',
    'Staging': 'text-emerald-400',
    'Commit': 'text-red-400',
    'Branch': 'text-indigo-400',
    'Deploy': 'text-rose-400',
    'Código': 'text-lime-400',
    'Cabeçalhos': 'text-amber-400',
    'Callouts': 'text-violet-400',
    'Matemática': 'text-fuchsia-400',
    'Automação': 'text-teal-400',
    // Removido duplicado 'Matemática': 'text-sky-400',
    'ETL': 'text-orange-400',
    'Python': 'text-yellow-400',
    'Debug': 'text-red-400',
    'default': 'text-gray-400'
  };
  return colors[category] || colors.default;
};