import { readdirSync } from 'fs';
import path from 'path';

export interface ImageData {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

const imageTitles: { [key: string]: string } = {
  'showcase.jpg': 'Creative Design Showcase',
  'showcase1.jpg': 'Innovative Project Display',
  'showcase3.jpg': 'Artistic Portfolio Piece',
  'showcase4.jpg': 'Design Excellence',
  'showcase5.jpg': 'Creative Masterpiece',
  'showcase6.jpg': 'Visual Art Showcase',
  'Seedling.jpg': 'Growth and Development',
  'pexels1.jpg': 'Modern Architecture',
  'pexels2.jpg': 'Urban Landscape',
  'pexels3.jpg': 'Natural Beauty',
  'pexels4.jpg': 'Contemporary Design',
  'pexels5.jpg': 'Artistic Vision',
  'pexels6.jpg': 'Creative Expression',
  'pexels7.jpg': 'Design Innovation'
};

export const formatAltText = (filename: string): string => {
  return imageTitles[filename] || filename
    .split('.')[0]
    .split(/(?=[A-Z])|_|-/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

// All images for about section gallery
const aboutImages = [
  'showcase.jpg',
  'showcase1.jpg',
  'showcase3.jpg',
  'showcase4.jpg',
  'showcase5.jpg',
  'showcase6.jpg',
  'Seedling.jpg',
  'pexels1.jpg',
  'pexels2.jpg',
  'pexels3.jpg',
  'pexels4.jpg',
  'pexels5.jpg',
  'pexels6.jpg',
  'pexels7.jpg'
];

// Only pexels images for projects section
const projectImages = [
  'pexels1.jpg',
  'pexels2.jpg',
  'pexels3.jpg',
  'pexels4.jpg',
  'pexels5.jpg',
  'pexels6.jpg',
  'pexels7.jpg'
];

export const getImagesFromDirectory = (directory: string): ImageData[] => {
  const images = directory === 'about' ? aboutImages : projectImages;
  return images.map((file, index) => ({
    id: `${directory}-${index + 1}`,
    src: `/${file}`,
    alt: formatAltText(file),
    caption: formatAltText(file)
  }));
}; 