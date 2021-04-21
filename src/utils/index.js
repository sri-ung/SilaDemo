export const handleHomeRedirect = (app, flows, flow, handle) => {
    const activeUser = app.users.find(u => u.handle === handle);
    const success = activeUser && flows[flow].routes.filter(route => app.success.some(success => success.handle === activeUser.handle && success.page === route)).pop();
    const notCertified = activeUser && activeUser.business && !activeUser.certified && app.success.some(success => success.handle === activeUser.handle && success.page === '/certify');
    return notCertified ? '/certify' : success && flows[flow].routes.indexOf(success) !== flows[flow].routes.length - 1 ? flows[flow].routes[flows[flow].routes.indexOf(success) + 1] : flows[flow].routes[0];
};