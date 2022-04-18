import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Icon } from "@rneui/themed";
import { useDispatch } from "react-redux";
import tw from "twrnc";
import { setDestination, setOrigin } from "../slices/navSlice";
import NavFavourites from "./NavFavourites";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}> Good Morning, Trinath </Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View style={tw`flex flex-row`}>
          <GooglePlacesAutocomplete
            keyboardShouldPersistTaps="handled"
            placeholder="Where to ?"
            nearbyPlacesAPI="GooglePlacesSearch"
            styles={toInputBoxStyles}
            fetchDetails={true}
            debounce={400}
            preProcess={() => {
              console.log("pre process");
              dispatch(
                setDestination({
                  location: {
                    lng: 72.877426,
                    lat: 19.07609,
                  },
                  description: "test",
                })
              );

              return "India";
            }}
            onPress={(data, details = null) => {
              console.log(data, details);
            }}
            query={{
              key: "",
              language: "en",
            }}
          />
          <Icon
            style={tw`p-2 bg-black rounded-full w-10 mt-6`}
            name="arrowright"
            type="antdesign"
            color="white"
            onPress={() => {
              navigation.navigate("RideOptionCard");
            }}
          />
        </View>
        <NavFavourites />
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-gray-100`}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("RideOptionCard")}
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
        >
          <Icon name="car" type="font-awesome" color="white" size={16} />
          <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row w-24 px-4 py-3 rounded-full justify-between`}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            size={16}
          />
          <Text style={tw`text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "80%",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 10,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
