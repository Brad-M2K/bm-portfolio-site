import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/*": ["./*"]
        }
    }
};

export default nextConfig;
