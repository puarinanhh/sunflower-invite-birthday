# Sunflower Birthday Invitation

A beautiful, responsive birthday invitation website with a sunflower theme. Built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🌻 Beautiful sunflower-themed design
- 📱 Fully responsive layout
- ✨ Smooth animations and transitions
- 📝 RSVP form
- 🗓️ Event details section
- 🎨 Customizable colors and content

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd sun-flower-project
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

## Customization

### Changing Event Details

Edit the event details in `src/app/page.tsx`:
- Update the date and time
- Modify the location
- Change the event description
- Customize the RSVP form fields

### Modifying the Theme

The sunflower theme colors can be customized in `src/app/globals.css`:
```css
:root {
  --sunflower-yellow: #FFD700;
  --sunflower-brown: #8B4513;
  --sunflower-green: #228B22;
  --sunflower-orange: #FFA500;
}
```

### Adding Images

1. Place your images in the `public` directory
2. Update the image paths in `src/app/page.tsx`
3. Recommended images to add:
   - `sunflower-pattern.png` (background pattern)
   - `sunflower-garden.jpg` (event location image)
   - `sunflower-icon.png` (favicon)

## Technologies Used

- Next.js 14
- TypeScript
- Tailwind CSS
- Google Fonts (Inter & Dancing Script)

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.
