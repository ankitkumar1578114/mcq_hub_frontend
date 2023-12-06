import IconSuccss from '../../../Components/Icons/IconSuccess'
import IconFailed from '../../../Components/Icons/IconFailed'
import styles from './styles.module.css'

const Tag = ({ tag, tags = [], setTags = () => {} }) => {
  const onTagClick = () => {
    setTags((prev) => {
      const isPresent = prev.includes(tag?.id)
      if (isPresent) {
        return prev?.filter((t) => t !== tag?.id)
      } else {
        return [...tags, tag?.id]
      }
    }
    )
  }
  return (<>
      <div className={tags.includes(tag?.id) ? styles.selected_item : styles.not_selected_item} onClick={() => onTagClick()}>
              {
                tags.includes(tag?.id)
                  ? <IconSuccss />
                  : <IconFailed />
              }
             {tag.title} &nbsp;
      </div>
      </>)
}

export default Tag
