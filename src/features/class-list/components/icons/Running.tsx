interface Props {
  size: number;
}

export const Running = ({ size }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      focusable="false"
      preserveAspectRatio="xMidYMid meet"
    >
      <title>Running</title>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M17.334 5.333a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 0 1-2.666 0Zm1.333-2.667a2.667 2.667 0 1 0 0 5.334 2.667 2.667 0 0 0 0-5.333ZM15.56 10c.291 0 .519 0 .699.005l-.182.352c-.151.288-.335.58-.536.898l-.035.056c-.208.33-.433.692-.615 1.06-.364.735-.627 1.647-.153 2.594.364.728.893 1.442 1.382 2.1l.021.028c.498.668.953 1.28 1.269 1.883.284.542.444 1.427.522 2.254a15.796 15.796 0 0 1 .069 1.404v.025a.667.667 0 1 0 1.333.014v-.128a17.067 17.067 0 0 0-.074-1.442c-.08-.84-.254-1.954-.67-2.746-.364-.697-.875-1.383-1.348-2.018l-.052-.07c-.503-.677-.958-1.296-1.26-1.9-.193-.388-.14-.809.156-1.407.147-.298.337-.604.548-.94l.043-.068c.194-.307.404-.641.58-.978.167-.318.322-.614.409-.854.069-.192.217-.663-.118-1.055a1.006 1.006 0 0 0-.478-.3 2.102 2.102 0 0 0-.433-.077c-.27-.024-.629-.024-1.045-.024h-3.527a.667.667 0 0 0-.59.358l-1.398 2.666a.667.667 0 1 0 1.18.62L12.469 10h3.092Zm-1.883 6.095c.315.19.418.599.228.914l-2 3.334a.667.667 0 0 1-.571.323h-4a.667.667 0 1 1 0-1.333h3.622l1.806-3.01a.667.667 0 0 1 .915-.228ZM29.263 4.298a.667.667 0 1 0-1.192-.596l-2.667 5.333a.667.667 0 1 0 1.193.596l2.666-5.333Zm-.298 4.439c.33.165.463.565.298.894l-1.333 2.667a.667.667 0 0 1-.596.368H21.03l5.4 12h.57a2.333 2.333 0 1 1 0 4.667H5a2.333 2.333 0 0 1 0-4.666h19.968l-5.577-12.394a.667.667 0 0 1 .608-.94h6.922l1.149-2.298a.667.667 0 0 1 .894-.298ZM25.987 26H5a1 1 0 0 0 0 2h22a1 1 0 1 0 0-2h-1.013Z"
        fill="#697180"
      />
    </svg>
  );
};
