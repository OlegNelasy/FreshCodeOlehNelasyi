export function StarIcon({ className, onClick, isStarred }) {
  return (
    <svg
      className={className}
      onClick={onClick}
      viewBox="0 0 24 24"
      fill={isStarred ? "#ffd700" : "#a0a0a0"}
    >
      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
    </svg>
  );
}
