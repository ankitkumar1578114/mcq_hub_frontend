import style from '../Layout/styles.module.css'
const Input = ({ label, _key, register, required, error, placeholder, rules, span = 4 }) => (
    <>
    <div style={{ width: `${100 * (span / 12)}%` }}>
      <div><label className={style.label}>{label}</label></div>
      <div><input className={style.normal_input} {...register(_key, { required: rules?.required })} placeholder={placeholder}/></div>
      <span className={style.error_text}>
            { error ? (rules?.required || 'Required') : null}
        </span>
    </div>
    </>
)
export default Input
