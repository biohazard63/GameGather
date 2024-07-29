export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "admin",
      href: "/admin",
      roles: ["admin"]
    },
    {
      label: "user",
      href: "/user",
      roles: ["user"],
    },

  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/biohazard63",
    discord: "https://discord.gg/svwDTdTm",
  },
};


// Function to get user role (this is just a placeholder, replace with actual implementation)
export function getUserRole(): string {
  // Replace with actual logic to get the user's role
  return "user"; // or "admin"
}

// Function to filter nav items based on user role
export function getFilteredNavItems(role: string) {
  return siteConfig.navItems.filter(item => item.roles.includes(role));
}