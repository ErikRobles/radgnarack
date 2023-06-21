/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: "/api/contact",
            headers: [
              {
                key: "Access-Control-Allow-Origin",
                value: "*", // Replace * with the specific origin you want to allow, e.g., "https://your-nextjs-app.com"
              },
              {
                key: "Access-Control-Allow-Methods",
                value: "POST",
              },
              {
                key: "Access-Control-Allow-Headers",
                value: "Content-Type",
              },
              {
                key: "Access-Control-Max-Age",
                value: "86400", // 24 hours (optional)
              },
            ],
          },
        ];
      },
}

module.exports = nextConfig
