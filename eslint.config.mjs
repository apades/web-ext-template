import antfu from '@antfu/eslint-config'
import hooksPlugin from 'eslint-plugin-react-hooks'

export default antfu(
  {
    plugins: {
      'react-hooks': hooksPlugin,
    },
    react: true,
    rules: {
      'node/prefer-global/process': 'off',
      'ts/no-require-imports': 'off',
      'react/prefer-destructuring-assignment': 'off',
    },
  },
)
