# WDD430 Portfolio

A modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. This project showcases my development work and serves as a demonstration of Next.js App Router capabilities.

## 🚀 Live Demo

 
*Replace the URL above with your actual Vercel deployment URL*

## 📋 Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Deployment](#deployment)
- [Team Access](#team-access)
- [Learn More](#learn-more)

## ✨ Features

- 📱 **Responsive Design** - Fully responsive layout that works on all devices
- 🎨 **Modern UI** - Clean and professional design with Tailwind CSS
- 🔗 **Client-Side Navigation** - Seamless navigation using Next.js Link component
- 📝 **Dynamic Content** - Project cards with props for reusable components
- 🏗️ **File-Based Routing** - Intuitive routing structure with Next.js App Router
- 🖥️ **Server Components** - All components are server-side rendered for better performance
- 🔌 **API Routes** - Built-in API endpoint at `/api/hello`
- ⚡ **Fast Performance** - Optimized with Next.js features

## 📁 Project Structure
wdd430-portfolio/
├── app/
│ ├── favicon.ico # App icon
│ ├── globals.css # Global styles with Tailwind
│ ├── layout.tsx # Root layout with Header & Footer
│ ├── page.tsx # Home/Portfolio page
│ ├── about/
│ │ └── page.tsx # About page
│ └── api/
│ └── hello/
│ └── route.ts # Sample API route
├── components/
│ ├── Header.tsx # Navigation header
│ ├── ProjectCard.tsx # Reusable project card
│ ├── ProjectList.tsx # Container for projects
│ ├── Footer.tsx # Footer with dynamic year
│ └── SkillsCard.tsx # Custom component for About page
├── public/ # Static assets
├── package.json # Project dependencies
├── tailwind.config.ts # Tailwind CSS configuration
├── tsconfig.json # TypeScript configuration
└── README.md # Project documentation

text

## 🛠️ Technologies Used

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** [Vercel](https://vercel.com/)

## 🚀 Getting Started

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/chimbo87/wdd430-portfolio.git
cd wdd430-portfolio