import React, {FC, useEffect, useState} from "react";
import styles from "./Catalog.module.scss";
import Container from "../../components/Container/Container";
import Filter from "./Filter/Filter";
import CatalogInfo from "./CatalogInfo/CatalogInfo";
import CatalogFilms from "./CatalogFilms/CatalogFilms";

const Catalog:FC = () => {
    const [isShowFilters, setIsShowFilters] = useState(false);

    return (
        <div className={styles.catalog}>
            <Container>
                <Container>
                    <CatalogInfo setIsShowFilters={setIsShowFilters}/>
                    <div className={styles.catalog__mainInfo}>
                        <div className={styles.catalog__filter}>
                            <Filter isShowFilters={isShowFilters} setIsShowFilters={setIsShowFilters}/>
                        </div>
                        <CatalogFilms />
                    </div>
                </Container>
            </Container>
        </div>
    )
}

export default Catalog;