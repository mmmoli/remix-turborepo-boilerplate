import type { Meta, StoryObj } from '@storybook/react'

import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from './sheet'

const meta: Meta<typeof Sheet> = {
	component: () => (
		<Sheet>
			<SheetTrigger>Open</SheetTrigger>
			<SheetContent>
				<SheetHeader>
					<SheetTitle>Are you absolutely sure?</SheetTitle>
					<SheetDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</SheetDescription>
				</SheetHeader>
			</SheetContent>
		</Sheet>
	),
}

export default meta

type Story = StoryObj<typeof Sheet>

export const Default: Story = {}
