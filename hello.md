## CÁCH CÀI TAILWINDCSS V3

## Chuẩn bị
- nodejs
- Extension: Tailwind CSS Intellisense, PostCSS Language Support

## Cài đặt
1. Install tailwind:
> npm install -D tailwindcss
> npx tailwindcss init 
(khởi tạo file tailwin.config.js)

2. Configure your template paths (copy đoạn ở dưới vào content: [] trong file js ở trên)
> "./public/**/*.{html,js}"

3. Add the tailwind directives to your CSS
create src/tailwind.css and add three lines below to it.
> @tailwind base;
> @tailwind components;
> @tailwind utilities;

4. Start the tailwind CLI build process: (Hệ thống sẽ tạo folder public và css cần thiết trong đó)
> npx tailwindcss -i ./src/tailwind.css -o ./public/css/tailwind.css --watch

5. Start using Tailwind in HTML:(tạo 1 file index.html trong public và dán link ở dưới vào)
> <link href="./tailwind.css" rel="stylesheet">

6. Up code lên git
Tạo 1 file .gitignore và gõ "node_modules"
Tạo 1 repo trên github và copy đường dẫn
> git init
> git remote add https://github.com/bao3004/tailwind-project.git
> git remote -v
> git add .
> git commit -m "Hi"
> git push origin master