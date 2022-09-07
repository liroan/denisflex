import styles from "./FooterRefs.module.scss";

const refs = [
    { title: "Вакансии", link: "/"  },
    { title: "Реклама", link: "/"  },
    { title: "Группа поддержки", link: "/"   },
    { title: "Блог", link: "/"   },
    { title: "Соглашения", link: "/"   },
    { title: "Справки", link: "/"   },
]

const FooterRefs = () => {
    return (
        <div className={styles.footer__refs}>
            {
                refs.map(({ title, link }, index) => (
                    <div className={styles.footer__ref} key={index}>
                        <a href={link}>{title}</a>
                    </div>
                ))
            }
        </div>
    )
}

export default FooterRefs;