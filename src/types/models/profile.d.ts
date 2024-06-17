declare interface Profile {
    access: string;
    refresh: string;
};

enum Roles {
    SUPER = "SUPERADMIN"
}

declare interface AuthRequestType {
    password: string;
    login: string;
}

declare interface AuthResponseType {
    id: number;
    role: "admin";
    authenticationToken: string;
    refreshToken: string;
    expiresAt: string;
}