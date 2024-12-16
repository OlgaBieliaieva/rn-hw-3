import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import BgImg from "../assets/images/bg-img.jpg";
import CommentIcon from "./icons/CommentIcon";
import LikeIcon from "./icons/LikeIcon";
import MapPinIcon from "./icons/MapPinIcon";
import { colors } from "../styles/global";

const PostsList = ({ navigation }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.postCard}>
        <View style={styles.imgWrapper}>
          <Image source={BgImg} style={styles.img} />
        </View>
        <Text style={styles.postTitle}>Ліс</Text>
        <View style={styles.postDescription}>
          <View style={styles.feedback}>
            <TouchableOpacity
              style={styles.feedbackItem}
              onPress={() => navigation.navigate("Comments")}
            >
              <CommentIcon fill={colors.orange} />
              <Text style={styles.feedbackText}>8</Text>
            </TouchableOpacity>
            <View style={styles.feedbackItem}>
              <LikeIcon fill={colors.orange} />
              <Text style={styles.feedbackText}>153</Text>
            </View>
          </View>
          <View style={styles.location}>
            <MapPinIcon />
            <Text style={styles.locationText}>Ukraine</Text>
          </View>
        </View>
      </View>
      <View style={styles.postCard}>
        <View style={styles.imgWrapper}>
          <Image source={BgImg} style={styles.img} />
        </View>
        <Text style={styles.postTitle}>Ліс</Text>
        <View style={styles.postDescription}>
          <View style={styles.feedback}>
            <TouchableOpacity
              style={styles.feedbackItem}
              onPress={() => navigation.navigate("Comments")}
            >
              <CommentIcon fill={colors.orange} />
              <Text style={styles.feedbackText}>8</Text>
            </TouchableOpacity>
            <View style={styles.feedbackItem}>
              <LikeIcon fill={colors.orange} />
              <Text style={styles.feedbackText}>153</Text>
            </View>
          </View>
          <View style={styles.location}>
            <MapPinIcon />
            <Text style={styles.locationText}>Ukraine</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default PostsList;

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    paddingHorizontal: 16,
    display: "flex",
    marginBottom: 60,
  },
  postCard: {
    width: "100%",
    maxWidth: 343,
    height: 300,
    display: "flex",
    gap: 8,
    marginBottom: 32,
  },
  imgWrapper: {
    width: 343,
    height: 240,
    borderRadius: 8,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: 240,
    objectFit: "cover",
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 500,
  },
  postDescription: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  feedback: {
    display: "flex",
    flexDirection: "row",
    gap: 24,
  },
  feedbackItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  feedbackText: {
    fontSize: 16,
  },
  location: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  locationText: {
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: colors.black,
  },
});
