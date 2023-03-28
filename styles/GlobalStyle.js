export default {
  colors: {
    primary: '#000',
  },
  font: {
    family: {
      black: 'Poppins-Black',
      blackItalic: 'Poppins-BlackItalic',
      bold: 'Poppins-Bold',
      boldItalic: 'Poppins-BoldItalic',
      extraBold: 'Poppins-ExtraBold',
   },
   metrics: {
     window: {
      width,
      height,
     },
     statusBarHeight: Platform.select({
       android: 0,
       ios: getStatusBarHeight(),
       default: 0,
     }),
     bottomSpace: Platform.select({
       android: 0,
       ios: getBottomSpace(),
       default: 0,
     }),
    }
  }
}