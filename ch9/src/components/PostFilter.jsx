import PropTypes from 'prop-types'

export function PostFilter({ field, value, onChange }) {
  return (
    <div>
      <label htmlFor={`filter-${field}`}>{field}: </label>
      <input
        type='text'
        name={`filter-${field}`}
        id={`filter-${field}`}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

PostFilter.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
