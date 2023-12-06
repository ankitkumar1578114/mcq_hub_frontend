import useListTags from '../hooks/useListTags'
import Tag from './Tag'
import styles from './styles.module.css'

const Tags = ({ tags = [], setTags = () => {} }) => {
  const { data } = useListTags()
  return (<div className={styles.tag_container}>
        {
            data?.map((tag) => (
                <Tag key={tag?.id} tag={tag} tags={tags} setTags={setTags}/>
            ))
        }
    </div>)
}
export default Tags
