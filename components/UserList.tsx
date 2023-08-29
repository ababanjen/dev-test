import { JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode, ReactPortal, useState } from "react"
import { clsx } from "clsx";
import useUserStore from "@/helpers/store/user";
const UserList = () => {
  const { users } = useUserStore(state => state)

  const [expand, setExpand] = useState<null | number>(null)

  const handleExpand = (id: any) => setExpand(id === expand ? null : id)

  return (
    <div className="flex flex-col gap-2 m-6">
      {users?.map(({ id, address, name, phone, email }: {
        phone: ReactNode;
        email: ReactNode; id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined;
        address: {
          city: string,
          street: string,
          suite: string,
          zipcode: string,
        }
      }) => (
        <div onClick={() => handleExpand(id)} key={id} className={
          clsx({
            "flex flex-col border rounded p-4 hover:bg-blue-50 cursor-pointer gap-2": true,
            "bg-blue-100": expand === id
          })
        }>
          <div className="flex flex-col">
            <span className="text-xl font-semibold">{name}</span>
            <span className="">{phone}</span>
            <span className="">{email}</span>
          </div>
          {expand === id && (
            <div className="flex flex-col">
              <span className="text-xl font-semibold">Address</span>
              <span className="">{address.city} {address.street} {address.suite} {address.zipcode}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default UserList