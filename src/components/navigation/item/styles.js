export default (theme) => {
  console.log(theme)
  const { space, fontSizes } = theme;

  return {
    container: {
      padding: space[2],
      borderBottom: space[1]
    },
    text: {
      fontSize: fontSizes.md,
    },
    hstack: {
      alignItems: 'center',
    }
  }
}

