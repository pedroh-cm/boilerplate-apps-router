module.exports = {
  '*.{js,jsx,ts,tsx}': (filenames) => [
    `prettier --write ${filenames.join(' --file')}`,
    `npm run lint --fix . ${filenames.join(' --file')}`
  ]
}
