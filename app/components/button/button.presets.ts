import { ViewStyle, TextStyle } from "react-native"
import { color, spacing } from "../../theme"

/**
 * All text will start off looking like this.
 */

type ButtonTypes = 'Primary' | 'PrimaryBlue' | 'Secondary';

const BASE_VIEW: ViewStyle = {
  paddingVertical: spacing[3],
  paddingHorizontal: spacing[3],
  borderRadius: 50,
  justifyContent: "center",
  alignItems: "center",
}

const BASE_TEXT: TextStyle = {
  paddingHorizontal: spacing[3],
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const viewPresets: Record<ButtonTypes, ViewStyle> = {
  /**
   * A smaller piece of secondard information.
   */

  Primary: {
    ...BASE_VIEW,
    backgroundColor: color.palette.red
  },

  PrimaryBlue: {
    ...BASE_VIEW,
    backgroundColor: color.palette.blue
  },

  Secondary: {
    ...BASE_VIEW,
    backgroundColor: color.palette.offWhite
  }
}

export const textPresets: Record<ButtonPresetNames, TextStyle> = {
  Primary: {
    ...BASE_TEXT,
    fontSize: 16,
    color: color.palette.white
  },
  PrimaryBlue: {
    ...BASE_TEXT,
    fontSize: 16,
    color: color.palette.white
  },
  Secondary: {
    ...BASE_TEXT,
    fontSize: 16,
    color: color.palette.blue
  }

}

/**
 * A list of preset names.
 */
export type ButtonPresetNames = keyof typeof viewPresets
