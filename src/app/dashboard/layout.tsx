
export default function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: any;
}) {
    return (
        <html lang="en" dir="">
            <body className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
                <div>
                    {children}
                </div>
            </body>
        </html>
    );
}
