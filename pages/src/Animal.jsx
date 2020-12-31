import Image from 'next/image';

const AnimalDisplay = props => {
    return (
        <div className="flex flex-row p-2 border-black border-2 rounded-lg bg-blue-300">
          <Image
            height={100} width={100} src={`/${props.img}`}
            className=""
          />
          <div className="flex flex-col text-3xl px-4 -mb-2 w-56">
            <div>
              type: {props.type}
            </div>
            <div>
              mood: {props.state}
            </div>
            <div>
              adopt: ${props.adoption_fee}
            </div>
          </div>
          <button
            className={"text-5xl bg-blue-900 rounded-lg text-gray-200 font-bold p-3 " +
                       "hover:bg-blue-800 active:bg-blue-600 focus:outline-none"}
          >
            Adopt
          </button>
        </div>
    )
}
export default AnimalDisplay
