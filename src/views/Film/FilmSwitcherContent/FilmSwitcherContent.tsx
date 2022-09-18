import styles from "./FilmSwitcherContent.module.scss";
import React, {FC} from "react";
import {IPersonStaff} from "../../../types";
import {FilmCategory} from "../Film";
import {Facts, EmptyContent, SliderItemStaff, SliderContainer} from "../../../components";
import {getTitleWithCount} from "../../../utils";
import {useGetFactsAndErrorsMovieByIdQuery, useGetStaffMovieByIdQuery} from "../../../services/services";


interface FilmSwitcherContentProps {
    activeCategory: FilmCategory;
    description: string | null;
    filmId: number;
}

const FilmSwitcherContent: FC<FilmSwitcherContentProps> = React.memo(({activeCategory, description, filmId}) => {

    const {
        data: factsAndErrors,
        isFetching: factsLoading,
        error: factsError
    } = useGetFactsAndErrorsMovieByIdQuery(filmId);
    const {data: staff, isFetching: staffLoading, error: staffError} = useGetStaffMovieByIdQuery(filmId);

    return (
        <div className={styles.film__switchContent}>
            {
                activeCategory === FilmCategory.DESCRIPTION && (
                    !description ? <EmptyContent/> :
                        <p className={styles.film__description}>
                            {description}
                        </p>)
            }
            {
                activeCategory === FilmCategory.ACTORS && (
                    <SliderContainer items={staff}
                                     getSliderCard={(item: IPersonStaff) => <SliderItemStaff staff={item}
                                                                                             key={item.staffId}/>}
                                     isLoading={staffLoading}
                                     error={staffError} title={getTitleWithCount("Состав", staff?.length)}
                    />
                )
            }
            {
                activeCategory === FilmCategory.FACTS && (
                    <Facts facts={factsAndErrors?.items} error={factsError} isLoading={factsLoading}/>
                )
            }
        </div>
    )
})

export default FilmSwitcherContent;