import React from "react";
const HomeLazy = React.lazy(() => import('../views/Home/Home'));
const CatalogLazy = React.lazy(() => import('../views/Catalog/Catalog'));
const FavouritesLazy = React.lazy(() => import('../views/Favourites/Favourites'));
const PersonLazy = React.lazy(() => import('../views/Person/Person'));
const FilmContainerLazy = React.lazy(() => import('../views/Film/FilmContainer'));
const RoomLazy = React.lazy(() => import('../views/Room/Room'));
const LoginLazy = React.lazy(() => import('../views/Login/Login'));

interface IRoute {
    path: string;
    Component: React.ComponentType;
    index?: boolean;
}

export enum RouteNames {
    LOGIN = "login",
    HOME = "",
    CATALOG = "catalog",
    FAVOURITES = "favourites",
    ROOM = "room/:filmId",
    FILM = "film/:filmId",
    PERSON = "name/:personId",
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.LOGIN, Component: LoginLazy },
]

export const privateRoutes: IRoute[] = [
    { path: RouteNames.HOME, Component: HomeLazy, index: true },
    { path: RouteNames.CATALOG, Component: CatalogLazy },
    { path: RouteNames.FAVOURITES, Component: FavouritesLazy },
    { path: RouteNames.PERSON, Component: PersonLazy },
    { path: RouteNames.FILM, Component: FilmContainerLazy },
    { path: RouteNames.ROOM, Component: RoomLazy },
]