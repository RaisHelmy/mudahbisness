# Floating Bottom Navigation

A dynamic, horizontally scrollable bottom navigation component that automatically populates based on pages in the `pages` folder.

## Features

- Floating bottom navigation with smooth scrolling
- Automatically populates navigation items from page configurations
- Dynamic page switching
- Icon and text labels
- Active state styling
- Shadow and elevation effects

## Usage

### Basic Usage

```tsx
import { PageContainer } from '@/shared';

export default function App() {
  return <PageContainer />;
}
```

### Using Navigation Only

```tsx
import { FloatingBottomNav, pageConfigs } from '@/shared';
import { useState } from 'react';

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const CurrentPage = pageConfigs[currentPage].component;

  return (
    <View style={{ flex: 1 }}>
      <CurrentPage />
      <FloatingBottomNav onPageChange={setCurrentPage} />
    </View>
  );
}
```

## Adding New Pages

To add a new page to the navigation:

1. Create a new file in `shared/pages/` (e.g., `my-page.tsx`)
2. Export the page component and configuration:

```tsx
import React from 'react';
import { View, Text } from 'react-native';

export const MyPage = () => {
  return (
    <View>
      <Text>My Page Content</Text>
    </View>
  );
};

export const myPageConfig = {
  name: 'my-page',
  title: 'My Page',
  icon: 'star', // Use any Ionicons name
  component: MyPage,
};
```

3. Add the configuration to `shared/pages/index.ts`:

```tsx
import { myPageConfig } from './my-page';

export const pageConfigs = [
  landingConfig,
  foodMenuConfig,
  settingConfig,
  myPageConfig, // Add your new page here
];

export * from './my-page';
```

The navigation will automatically update with your new page!

## Page Configuration

Each page configuration object should have:

- `name`: Unique identifier for the page
- `title`: Display text in the navigation
- `icon`: Ionicons icon name (e.g., 'home', 'settings', 'restaurant')
- `component`: The React component to render

## Styling

The navigation is styled with:
- Floating position at bottom of screen
- White background with shadow
- Active item has blue background (#007AFF)
- Inactive items have light gray background
- Rounded corners for modern look

You can customize styles in `FloatingBottomNav.tsx`.
