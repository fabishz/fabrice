# Images Directory Structure

This directory contains all static images used in the portfolio.

## Folder Organization

```
public/images/
├── projects/        # Project screenshots and thumbnails
├── blog/           # Blog post featured images
├── case-studies/   # Case study images
└── profile/        # Profile photos and personal images
```

## Usage in Components

### Using Images with Next.js Image Component

```tsx
import Image from "next/image";

// For project images
<Image 
  src="/images/projects/kubernetes-platform.png" 
  alt="Kubernetes Platform"
  width={800}
  height={600}
/>

// For blog images
<Image 
  src="/images/blog/kubernetes-best-practices.jpg" 
  alt="Blog post cover"
  fill
  className="object-cover"
/>
```

### Image Naming Convention

Use kebab-case matching the project/blog/case-study ID:
- Projects: `{project-id}.png` (e.g., `kubernetes-platform.png`)
- Blog: `{blog-post-id}.jpg` (e.g., `kubernetes-best-practices.jpg`)
- Case Studies: `{case-study-id}.png` (e.g., `aws-eks-migration.png`)
- Profile: `avatar.jpg`, `hero-bg.jpg`, etc.

## Recommended Image Sizes

- **Project thumbnails**: 800x600px (4:3 ratio)
- **Blog featured images**: 1200x630px (OG image size)
- **Case study images**: 1000x750px
- **Profile photo**: 400x400px (square)

## Image Optimization

Next.js automatically optimizes images when using the `Image` component:
- Automatic WebP conversion
- Lazy loading
- Responsive sizing
- Blur placeholder support

## Adding New Images

1. Place images in the appropriate subfolder
2. Update the corresponding data in `src/lib/data.ts`
3. Replace `/placeholder.svg` with `/images/{category}/{filename}`

Example:
```typescript
{
  id: "kubernetes-platform",
  title: "Enterprise Kubernetes Platform",
  image: "/images/projects/kubernetes-platform.png", // Updated path
  // ...
}
```
