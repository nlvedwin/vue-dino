export function useColors() {
  function setDefaultPrimaryColors() {
    const styleTagForPrimaryColors = document.createElement('style')
    styleTagForPrimaryColors.innerHTML = `
              :root {
                  --color-primary-50: #8BEDFD;
                  --color-primary-100: #77EAFC;
                  --color-primary-200: #4FE3FC;
                  --color-primary-300: #27DDFB;
                  --color-primary-400: #05D3F4;
                  --color-primary-500: #04B0CC;
                  --color-primary-600: #038195;
                  --color-primary-700: #02515E;
                  --color-primary-800: #012227;
                  --color-primary-900: #000000;
              }
          `
    document.head.appendChild(styleTagForPrimaryColors)
  }

  function setCustomPrimaryColors(options = {}) {
    const styleTagForPrimaryColors = document.createElement('style')
    styleTagForPrimaryColors.innerHTML = `
              :root {
                  --color-primary-50: ${options['50']};
                  --color-primary-100: ${options['100']};
                  --color-primary-200: ${options['200']};
                  --color-primary-300: ${options['300']};
                  --color-primary-400: ${options['400']};
                  --color-primary-500: ${options['500']};
                  --color-primary-600: ${options['600']};
                  --color-primary-700: ${options['700']};
                  --color-primary-800: ${options['800']};
                  --color-primary-900: ${options['900']};
              }
          `
    document.head.appendChild(styleTagForPrimaryColors)
  }

  return {
    setDefaultPrimaryColors,
    setCustomPrimaryColors,
  }
}
