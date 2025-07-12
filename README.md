# Next.js + shadcn/ui Project

A modern, beautiful web application built with Next.js 14 and shadcn/ui components.

## 🚀 Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** components for beautiful UI
- **ESLint** for code quality
- **Responsive design** that works on all devices

## 🛠️ Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Re-usable components
- [Radix UI](https://www.radix-ui.com/) - Headless UI primitives

## 📦 Installed Components

The following shadcn/ui components are already installed and ready to use:

- **Button** - Various button styles and variants
- **Card** - Content containers with header, content, and footer
- **Input** - Form input fields
- **Dialog** - Modal dialogs for user interactions

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd krazy-kreators-research
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   └── ui/               # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── input.tsx
└── lib/                  # Utility functions
    └── utils.ts          # shadcn/ui utilities
```

## 🎨 Adding More Components

To add more shadcn/ui components, use the CLI:

```bash
npx shadcn@latest add <component-name>
```

Available components include:
- `accordion` - Collapsible content sections
- `alert` - Alert messages
- `avatar` - User avatars
- `badge` - Status indicators
- `calendar` - Date picker
- `checkbox` - Checkbox inputs
- `dropdown-menu` - Dropdown menus
- `form` - Form components
- `label` - Form labels
- `popover` - Floating content
- `select` - Select dropdowns
- `separator` - Visual dividers
- `sheet` - Slide-out panels
- `switch` - Toggle switches
- `table` - Data tables
- `textarea` - Multi-line text inputs
- `toast` - Notification toasts
- `toggle` - Toggle buttons
- `tooltip` - Hover tooltips

## 🎯 Usage Examples

### Button Component
```tsx
import { Button } from "@/components/ui/button"

<Button variant="default">Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Delete</Button>
```

### Card Component
```tsx
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
  </CardContent>
</Card>
```

### Input Component
```tsx
import { Input } from "@/components/ui/input"

<Input type="email" placeholder="Enter your email" />
```

### Dialog Component
```tsx
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

<Dialog>
  <DialogTrigger asChild>
    <Button>Open Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Dialog Title</DialogTitle>
    </DialogHeader>
    <p>Dialog content goes here</p>
  </DialogContent>
</Dialog>
```

## 🎨 Customization

### Colors
The project uses a neutral color scheme by default. You can customize colors by:

1. Editing `src/app/globals.css` to modify CSS variables
2. Updating the `components.json` file to change the base color
3. Using Tailwind CSS classes for custom styling

### Styling
All components are built with Tailwind CSS and can be customized using:
- Tailwind utility classes
- CSS custom properties
- Component variants and sizes

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Radix UI Documentation](https://www.radix-ui.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Happy coding! 🎉
