import React from "react";
import {MantineProvider} from "@mantine/core";
import "./globals.css";

const Layout = ({children}: Readonly<{ children: React.ReactNode }>) => {
    return (
        <html lang="ru">
        <body>
        <MantineProvider>
            {children}
        </MantineProvider>
        </body>
        </html>
    );
}

export default Layout;