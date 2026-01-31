export function pageTitle(
    page: string,
    sub?: string | null
) {
    const appName = 'Solar Panel Monitoring';

    if (sub) {
        return `${page} | ${sub} | ${appName}`;
    }

    return `${page} | ${appName}`;
}
