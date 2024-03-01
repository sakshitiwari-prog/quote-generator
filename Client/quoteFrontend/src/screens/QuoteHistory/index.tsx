import React, {useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Constants} from '../../utils/constants';
import {List} from 'react-native-paper';
import Colors from '../../utils/colors';

import {useNavigation} from '@react-navigation/native';

import {styles} from './index.style';
import {ImagesAssets} from '../../utils/imageAssets';
import QuoteItem from '../../Components/quoteItem';
import {getDataFromStorage} from '../../utils/storage';
import ErrorModal from '../../Components/errorModal';
import {getQuoteList} from '../../utils/axios';
import {urls} from '../../utils/Helpers/urlHelper';
import Loader from '../../Components/Loader';
const QuoteHistoryScreen = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [error, setError] = useState({isError: false, msg: ''});
  const [isLoad, setIsLoad] = useState(false);

  const [quoteInfo, setQuoteInfo] = useState<any>({
    quoteHistory: [],
  });

  const [userData, setUserData] = useState<any>({name: 'User'});

  const navigation = useNavigation();
  const handleOutsideMenuPress = () => {
    if (isMenuVisible) {
      setIsMenuVisible(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    await getDataFromStorage('user')
      .then(data => {
        let parseData;
        if (data) {
          parseData = JSON.parse(data);
          setUserData(parseData);
        }
      })
      .catch((err: any) => {
        setError({isError: true, msg: Constants.others.wentWrong});
      });
  }
  useEffect(() => {
    if (userData.userId) {
      getQuoteHistory();
    }
  }, [userData]);

  async function getQuoteHistory() {
    setIsLoad(true); // Set loading state before fetching data
    try {
      if (!userData.userId) {
        throw new Error(Constants.others.wentWrong);
      }

      const sendData = {
        userId: userData.userId,
      };

      const res = await getQuoteList(urls.quoteList, sendData);

      if (res.existingUser.quoteHistory.length > 0) {
        setQuoteInfo({quoteHistory: res.existingUser.quoteHistory});
      } else {
        setQuoteInfo({quoteHistory: []}); // Update state even if there's no quote history
        throw Error(Constants.others.noQuotes);
      }

      setIsLoad(false); // Turn off loading state after fetching data
    } catch (error) {
      setError({isError: true, msg: Constants.others.wentWrong});
      setIsLoad(false); // Turn off loading state if there's an error
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => handleOutsideMenuPress}>
      <SafeAreaView>
        <StatusBar backgroundColor={Colors.white} barStyle="light-content" />
        <View style={styles.mainContainer}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image style={styles.backIcon} source={ImagesAssets.backIcon} />
            </TouchableOpacity>
            <View style={styles.headerTextContainer}>
              <Text style={styles.title}>
                {Constants.quoteHistoryScreen.quoteHistory}
              </Text>
            </View>
          </View>
          <View style={styles.formContainer}>
            <ScrollView nestedScrollEnabled={true}>
              <List.Section>
                {quoteInfo.quoteHistory &&
                  quoteInfo.quoteHistory.length > 0 &&
                  quoteInfo.quoteHistory.map((quote: any, index: number) => {
                    return (
                      <View key={index} style={styles.quoteCategory}>
                        <QuoteItem quote={quote} />
                      </View>
                    );
                  })}
              </List.Section>
            </ScrollView>
          </View>
        </View>
        {isLoad && <Loader isLoad />}
        {error.isError && (
          <ErrorModal
            error={error.isError}
            msg={error.msg}
            onCloseModel={() => setError({isError: false, msg: ''})}
          />
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default QuoteHistoryScreen;
