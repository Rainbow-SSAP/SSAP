import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta = {
  title: "@common/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefualtCheckbox: Story = {
  args: {},
};

export const CompoundCheckbox: Story = {
  args: {
    isCompound: true,
    child: <span>위의 내용을 확인하였으며, 모두 동의합니다.</span>,
  },
};
