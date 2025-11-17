/**
 * * This file is used to define the navigation links for the documentation site.
 */

// types
import { type navItem } from "../types/configDataTypes";

const navConfig: navItem[] = [
	{
		text: "Introduction",
		link: "/docs/getting-started/",
	},
	{
		text: "Components",
		link: "/docs/components/",
	},
	{
		text: "See Interactive Chapbook",
		link: "https://victorkane.com",
		newTab: true,
	},
];

export default navConfig;