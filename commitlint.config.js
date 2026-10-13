// Convención de commits del proyecto: `tipo: descripción (PET-XXX)`.
// Ej: `feat: grilla de productos (PET-013)`.
export default {
  extends: ['@commitlint/config-conventional'],
  plugins: [
    {
      rules: {
        // Regla propia: el título del commit debe terminar con el ID del ticket.
        'ticket-id': ({ header }) => [
          /\(PET-\d{3}\)$/.test(header ?? ''),
          'el commit debe terminar con el ID del ticket, ej: "feat: grilla de productos (PET-013)"',
        ],
      },
    },
  ],
  rules: {
    'type-enum': [2, 'always', ['feat', 'fix', 'docs', 'chore', 'style', 'refactor', 'test']],
    // Escribimos en español, así que no exigimos minúsculas/mayúsculas en la descripción.
    'subject-case': [0],
    'ticket-id': [2, 'always'],
  },
}
