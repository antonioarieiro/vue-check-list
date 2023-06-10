module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/vue3-essential", "@vue/airbnb"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    // Aqui você pode adicionar ou personalizar as regras do ESLint conforme sua necessidade
    // Por exemplo, para desabilitar a regra que exige ponto e vírgula no final de cada linha:
    semi: ["error", "never"],
  },
};
