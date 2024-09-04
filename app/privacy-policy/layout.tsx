const PrivacyPolicyLayout = ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full bg-white">
            <main className="h-full pt-0">
                {children}
            </main>
        </div>
    )
}

export default PrivacyPolicyLayout;