import * as React from "react"
import { ImageStyle, StyleProp, TextStyle, View, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../text/text"
import { Wallpaper } from "../wallpaper/wallpaper"

const ROOT: ViewStyle = {
  elevation: 5,
  borderRadius: 12,
  backgroundColor: color.palette.white,
  shadowColor: color.palette.black,
}

const POSTER_WRAPPER: ViewStyle = {
  justifyContent: "flex-end",
  flexDirection: 'row',
  width: 165,
  height: 230,
}

const POSTER_IMAGE: ViewStyle | ImageStyle = {
  borderRadius: 12,
  resizeMode: 'contain'
}

const POSTER_RATING_TEXT: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 16,
  paddingVertical: 2,
  paddingHorizontal: 8,
  borderRadius: 20,
  color: color.palette.white,
  backgroundColor: color.palette.orangeDarker
}

const POSTER_TITLE: TextStyle | ViewStyle = {
  color: color.palette.black,
  fontSize: 18,
  marginBottom: 5,
}

const POSER_GERNE: TextStyle | ViewStyle = {
  color: color.palette.lightGrey,
  fontSize: 14
}

const RATING_WRAPPER: ViewStyle = {
  paddingHorizontal: 15,
  paddingVertical: 15,
}

const POSTER_TEXT_WRAPPER: ViewStyle = {
  paddingHorizontal: 5,
  paddingVertical: 10,
}


export interface MovieBlockProps {
  image: any,
  title: string,
  gerne: string,
  style?: StyleProp<ViewStyle>
}

export const MovieBlock = observer(function MovieBlock(props: MovieBlockProps) {
  const { style, image, title, gerne } = props;

  return (
    <View style={[ROOT, style]}>
      <View style={POSTER_WRAPPER}>
        <Wallpaper backgroundImage={image} style={POSTER_IMAGE} />
        <View style={RATING_WRAPPER}>
          <Text style={POSTER_RATING_TEXT}>10</Text>
        </View>
      </View>
      <View style={POSTER_TEXT_WRAPPER}>
        <Text style={POSTER_TITLE}>{title}</Text>
        <Text style={POSER_GERNE}>{gerne}</Text>
      </View>
    </View>
  )
})
