import React from "react";
import { Avatar } from "./Avatar";

export default {
  title: "Design System/Avatar",
  component: Avatar,
  /*
  * More on Storybook argTypes at:
  * https://storybook.js.org/docs/react/api/argtypes
  */
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      options: ['tiny', 'small', 'medium', 'large'],
    },
  },
  parameters: {
    componentSubtitle: "Displays an image that represents a user or organization."
  }
};

export const Standard = (args) => <Avatar {...args} />;
Standard.args = {
  size: "large",
  username: "Tom Coleman",
  src: "https://avatars2.githubusercontent.com/u/132554",
};

export const Sizes = (args) => (
  <div>
    <Avatar {...args} size="large" />
    <Avatar {...args} size="medium" />
    <Avatar {...args} size="small" />
    <Avatar {...args} size="tiny" />
  </div>
);
/*
 * More on component Storybook args at
 * https://storybook.js.org/docs/react/writing-stories/args#story-args
 */
Sizes.args = {
  username: "Tom Coleman",
  src: "https://avatars2.githubusercontent.com/u/132554",
};
/*
 * More on component Storybook parameters at:
 * https://storybook.js.org/docs/react/writing-stories/parameters#story-parameters
 */
Sizes.parameters = {
  docs: {
    // The story now contains a description
    storyDescription: "Four sizes are supported.",
  },
};

export const Initials = (args) => (
  <div>
    <Avatar username="Tom Coleman" />
    <Avatar username="Dominic Nguyen" />
    <Avatar username="Kyle Suss" />
    <Avatar username="Michael Shilman" />
  </div>
);
Initials.parameters = {
  docs: {
    storyDescription: "Shows the initials of the names.",
  }
};

export const Loading = (args) => (
    <div>
      <Avatar {...args} size="large" />
      <Avatar {...args} size="medium" />
      <Avatar {...args} size="small" />
      <Avatar {...args} size="tiny" />
    </div>
);
Loading.args = {
  loading: true,
};
Loading.parameters = {
  docs: {
    storyDescription: "Shows the loading state in various sizes.",
  }
};

export const Large = (args) => (
  <div>
    <Avatar loading size="large" />
    <Avatar size="large" username="Tom Coleman" />
    <Avatar
      size="large"
      username="Tom Coleman"
      src="https://avatars2.githubusercontent.com/u/132554"
    />
  </div>
);
Large.parameters = {
  docs: {
    storyDescription: "Shows a large Avatar with different items.",
  }
};

export const Controls = Standard.bind({});
Controls.args = {
  loading: false,
  size: 'medium',
  username: 'Dominic Nguyen',
  src: 'https://avatars2.githubusercontent.com/u/263385'
};
Controls.parameters = {
  docs: {
    storyDescription: "Avatar component using Controls.",
  }
};