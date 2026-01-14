# ComPsych Design System (DS)

The ComPsych Design System is a centralized component library created to enforce design consistency, accelerate development, and provide a shared visual language across all ComPsych digital products. It serves as the single source of truth for reusable UI components, styling rules, and interaction patterns.

# Getting Started

To begin working with the ComPsych Design System, clone the repository and install dependencies:

```bash
git clone https://github.com/javierkonpo/compsych-ds.git
cd compsych-ds
npm install
```

# Running the Design System Locally

This Design System is intended to be developed and viewed locally.  
Teams can run Storybook to browse components, test variations, and inspect behavior without running a full application.

Start Storybook:

```bash
npm run storybook
```

Storybook will launch at:

```
http://localhost:6006
```

# What Engineering Can Expect

### Component Structure

All components are built in React and stored in:

```
src/stories/
```

Each component includes:

- JSX implementation  
- Component-specific CSS  
- Storybook documentation  
- Props and usage controls  
- Component variations and states  

### Development Flow

1. Run Storybook locally  
2. Open a component inside `src/stories`  
3. Modify JSX or styles as needed  
4. Storybook reloads automatically  
5. Add or update stories to document new states  

### Engineering Benefits

- Build components in isolation  
- Reduce duplicated UI work  
- Improve cross-product code consistency  
- Test responsiveness and states in real time  
- Clear documentation for every component  

# What Design Can Expect

### Visual Accuracy

Storybook displays components exactly as they will appear in production, ensuring design and engineering stay fully aligned.

### Interactive Controls

Designers can preview variations by adjusting:

- Size  
- Color  
- States (hover, focus, disabled)  
- Layout settings  

### Shared Source of Truth

Storybook provides a central reference for:

- Colors  
- Typography  
- Spacing  
- Buttons  
- Layouts  
- UI behavior and interaction states  

# Component Overview

### Button
- Primary & secondary variants  
- Multiple sizes  
- Interactive states  

### Header
- Authenticated and unauthenticated versions  
- Responsive layout  

### Page Template
- Base layout structure  
- Content sections  

Additional components will be added as the system grows.

# Repository Structure

```
compsych-ds/
│
├── .storybook/        # Storybook configuration
├── public/            # Static assets
├── src/
│   ├── stories/       # Components + Storybook stories
│   ├── index.js       # React entry point
│
├── package.json
└── README.md
```
