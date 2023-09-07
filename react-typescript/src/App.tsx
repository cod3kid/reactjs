import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Counter from "./components/Counter";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";
import User from "./components/User";
import Box from "./components/context/Box";
import ThemeContextProvider from "./components/context/ThemeProvider";
import UserContextProvider from "./components/context/UserProvider";
import { User as UserFromContext } from "./components/context/User";
import DomRef from "./components/ref/DomRef";
import MutableRef from "./components/ref/MutableRef";
import ClassCounter from "./components/class/Counter";
import Private from "./components/component-prop/Private";
import Profile from "./components/component-prop/Profile";
import List from "./components/generics/List";
import RandomNumber from "./components/restricting-props/RandomNumber";
import Toast from "./components/template-literals/Toast";
import HTMLButton from "./components/wrapping-html-comp/Button";
import HTMLInput from "./components/wrapping-html-comp/Input";
import CustomComponent from "./components/extracting-comp-prop-types/CustomComponent";
import Text from "./components/polymorphic-comp/Text";

function App() {
  const names = [
    {
      first: "Sasuke",
      last: "Uchiha",
    },
    { first: "Kisame", last: "Hoshigaki" },
    { first: "Naruto", last: "Uzumaki" },
  ];
  return (
    <div className="App">
      {/* <Greet name="Itachi Uchiha" isLoggedIn={false} /> */}
      {/* <Person name={{ first: "Madara", last: "Uchiha" }} /> */}
      {/* <PersonList names={names} /> */}
      {/* <Status status="success" /> */}
      {/* <Heading>Hello World</Heading> */}
      {/* <Oscar>
        <Heading>Oscar goes to ... Leonardo Di Caprio</Heading>
      </Oscar> */}
      {/* <Button clicked={(e, id) => console.log(id, " Button Clicked", e)} /> */}
      {/* <Input value="" handleChange={(e) => console.log(e)} /> */}
      {/* <Container
        containerStyles={{
          backgroundColor: "green",
          width: 100,
        }}
      /> */}
      {/* <User /> */}
      {/* <Counter /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <UserContextProvider>
        <UserFromContext />
      </UserContextProvider> */}
      {/* <DomRef /> */}
      {/* <MutableRef /> */}
      {/* <ClassCounter message="Increment" /> */}
      {/* <Private isLoggedIn={true} Component={Profile} /> */}
      {/* <List
        list={["Batman", "Superman", "Spiderman"]}
        onClick={(item) => console.log(item)}
      />
      <List list={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}
      {/* <List
        list={[
          { id: 1, name: "Clark Kent" },
          { id: 2, name: "Bruce Wayne" },
          { id: 3, name: "Peter Parker" },
        ]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <RandomNumber value={10} isNegative /> */}
      {/* <Toast position="center" /> */}
      {/* <HTMLButton variant="primary" onClick={() => console.log("Clicked")}>
        Login Button
      </HTMLButton>
      <HTMLInput type="number" /> */}
      {/* <CustomComponent name="Mui" isLoggedIn={false} /> */}
      <Text as="h1" size="lg">
        Heading
      </Text>
      <Text as="p" size="md">
        Paragraph
      </Text>
      <Text as="label" htmlFor="someid" size="sm" color="secondary">
        Label
      </Text>
    </div>
  );
}

export default App;
