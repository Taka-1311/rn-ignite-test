import * as React from "react"
import { storiesOf } from "@storybook/react-native"
import { StoryScreen, Story, UseCase } from "../../../storybook/views"
import { MovieBlock } from "./MovieBlock"

const image = "https://picsum.photos/300"

storiesOf("MovieBlock", module)
  .addDecorator((fn) => <StoryScreen>{fn()}</StoryScreen>)
  .add("Style Presets", () => (
    <Story>
      <UseCase style={{ alignItems: 'center' }} text="Primary" usage="The primary.">
        <MovieBlock title="Movie Title" gerne="Movie Gerne" image={{ uri: image }} />
      </UseCase>
    </Story>
  ))
