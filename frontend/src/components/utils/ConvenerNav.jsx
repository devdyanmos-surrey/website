// eslint-disable-next-line react/prop-types
export default function ConvenerNav({onClickHandler, currentTab}) {
  return (
    <div className="fixed z-50 w-auto h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
      <div className="grid h-full w-full grid-cols-3 mx-auto">
        <button
            onClick = {onClickHandler}
          data-tooltip-target="tooltip-home"
          type="button"
          className={`inline-flex flex-col items-center justify-center px-5 rounded-s-full hover:bg-gray-50 dark:hover:bg-gray-800 group ${currentTab === 'academics' ? 'bg-gray-50 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}`}
        >
          <svg
            className="w-6 h-6 pointer-events-none mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            aria-hidden="true"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M116.738,231.551c0,23.245,14.15,43.315,34.513,49.107c15.262,42.368,55.574,70.776,100.582,70.776
		s85.32-28.408,100.58-70.776c20.365-5.792,34.515-25.854,34.515-49.107c0-15.691-6.734-30.652-18.061-40.248l1.661-8.921
		c0-3.323-0.229-6.568-0.491-9.821l-0.212-2.593l-2.213,1.374c-30.871,19.146-80.885,27.71-116.754,27.71
		c-34.85,0-83.895-8.214-114.902-26.568l-2.259-0.59l-0.188,2.554c-0.192,2.632-0.384,5.256-0.357,8.23l1.632,8.649
		C123.466,200.923,116.738,215.876,116.738,231.551z"
              />
              <path
                d="M356.151,381.077c-9.635-5.97-18.734-11.607-26.102-17.43l-0.937-0.738l-0.972,0.691
		c-6.887,4.914-31.204,30.17-51.023,51.172l-10.945-21.273l5.697-4.076v-20.854h-40.07v20.854l5.697,4.076l-10.949,21.281
		c-19.825-21.009-44.154-46.265-51.034-51.18l-0.973-0.691l-0.937,0.738c-7.368,5.823-16.469,11.46-26.102,17.43
		c-30.029,18.61-64.062,39.697-64.062,77.344c0,22.244,52.241,53.579,168.388,53.579c116.146,0,168.388-31.335,168.388-53.579
		C420.213,420.774,386.178,399.687,356.151,381.077z"
              />
              <path
                d="M131.67,131.824c0,18.649,56.118,42.306,119.188,42.306s119.188-23.656,119.188-42.306v-25.706l43.503-17.702
		v55.962c-5.068,0.792-8.964,5.186-8.964,10.45c0,4.503,2.966,8.432,7.242,9.852l-8.653,57.111h40.704l-8.651-57.111
		c4.27-1.421,7.232-5.35,7.232-9.852c0-5.295-3.919-9.697-9.014-10.466l-0.21-67.197c0.357-0.621,0.357-1.266,0.357-1.607
		c0-0.342,0-0.978-0.149-0.978h-0.002c-0.262-2.446-2.011-4.612-4.56-5.652l-11.526-4.72L267.551,3.238
		C262.361,1.118,256.59,0,250.858,0s-11.502,1.118-16.69,3.238L72.834,68.936c-2.863,1.172-4.713,3.773-4.713,6.622
		c0,2.842,1.848,5.443,4.716,6.63l58.833,23.928V131.824z"
              />
            </g>
          </svg>

          <span className="sr-only">Academics</span>
        </button>
        <div
          id="tooltip-home"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Academics
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
        <button
            onClick = {onClickHandler}
          data-tooltip-target="tooltip-profile"
          type="button"
          className={`inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group ${currentTab === 'profile' ? 'bg-gray-50 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}`}
        >
          <svg
            fill="#ffffff"
            version="1.1"
            className="w-8 h-8 mb-1 pointer-events-none text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            width="193px"
            height="193px"
            viewBox="-4.55 -4.55 54.63 54.63"
            xmlSpace="preserve"
            stroke="#ffffff"
            transform="matrix(1, 0, 0, 1, 0, 0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.09106399999999999"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M22.766,0.001C10.194,0.001,0,10.193,0,22.766s10.193,22.765,22.766,22.765c12.574,0,22.766-10.192,22.766-22.765 S35.34,0.001,22.766,0.001z M22.766,6.808c4.16,0,7.531,3.372,7.531,7.53c0,4.159-3.371,7.53-7.531,7.53 c-4.158,0-7.529-3.371-7.529-7.53C15.237,10.18,18.608,6.808,22.766,6.808z M22.761,39.579c-4.149,0-7.949-1.511-10.88-4.012 c-0.714-0.609-1.126-1.502-1.126-2.439c0-4.217,3.413-7.592,7.631-7.592h8.762c4.219,0,7.619,3.375,7.619,7.592 c0,0.938-0.41,1.829-1.125,2.438C30.712,38.068,26.911,39.579,22.761,39.579z"></path>{" "}
              </g>{" "}
            </g>
          </svg>

          <span className="sr-only">Profile</span>
        </button>
        <div
          id="tooltip-profile"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Profile
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>

        <button
            onClick = {onClickHandler}
          data-tooltip-target="tooltip-students"
          type="button"
          className={`inline-flex flex-col items-center justify-center px-5 rounded-e-full hover:bg-gray-50 dark:hover:bg-gray-800 group
          ${currentTab === 'students' ? 'bg-gray-50 dark:bg-gray-800' : 'hover:bg-gray-50 dark:hover:bg-gray-800'}`}
        >
          <svg
            
            className="w-6 h-6 pointer-events-none mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
            aria-hidden="true"
            version="1.1"
            fill="currentColor"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            width="800px"
            height="800px"
            viewBox="0 0 30.505 30.505"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <polygon
                  points="12.628,25.333 12.628,23.398 5.241,23.398 2.616,12.901 0.74,13.371 3.731,25.333 5.243,25.333 3.303,29.607 
                4.477,30.141 6.659,25.333 9.861,25.333 11.959,30.133 13.141,29.617 11.269,25.333 "
                />
                <polygon points="18.164,20.195 18.164,30.504 18.921,30.505 18.921,20.195 18.653,20.195 " />
                <path
                  d="M23.12,15.308V12.93h-7.755v0.394l-2.053-3.235H9.054L6.488,22.816h1.546H8.64h0.886h2.672h0.167h1.472h0.941v-2.623
                h-1.332v0.002h-1.599l1.815-5.887l0.621,0.999H13.81v2.063h1.289v2.823v2.623v7.688h0.453h2.288V20.193V17.37h8.148v13.134h2.811
                V17.371h0.967v-2.063H23.12z M22.794,14.983h-2.656l-0.64-1.538l-1.899,0.758v-0.676h-0.332v0.808l-0.26,0.103V13.53h-0.334v1.042
                l-0.412,0.165l-0.571-0.902v-0.581h7.104V14.983z"
                />
                <rect x="21.476" y="13.531" width="0.334" height="1.206" />
                <rect x="20.927" y="13.528" width="0.334" height="1.206" />
                <path
                  d="M10.805,3.74c-0.07,0.148-0.145,0.3-0.198,0.458c-0.064,0.199-0.114,0.411-0.147,0.624
                c-0.326,2.117,1.125,4.092,3.242,4.417c0.573,0.087,1.135,0.042,1.658-0.109c1.623-0.41,2.827-1.875,2.827-3.625
                c0-0.261-0.027-0.516-0.078-0.763l0.924-0.934l-1.316-0.705l0.488-1.382l-1.775,0.226l-0.531-1.759L14.213,1.48L13.287,0
                l-0.794,1.644l-1.715-0.87l0.446,1.627l-1.37,0.168L10.805,3.74z"
                />
              </g>
            </g>
          </svg>
          <span className="sr-only">Students</span>
        </button>
        <div
          id="tooltip-students"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
        >
          Students
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </div>
  );
}
