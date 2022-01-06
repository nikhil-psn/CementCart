import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Alert, TextInput } from 'react-native'
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { auth, db } from "../firebase"


const MenuScreen = ({navigation}) => {

    var tableHeaders= ['Product Name', 'Price', 'Quantity']
    const [tableData,setTableData] = useState([])
    const [quantities,setQuantities] = useState([])

      useEffect(() => {
        console.log("In menu screen")
        db.collectionGroup("products").onSnapshot(snapshot => {
          console.log(snapshot.docs.map(doc => doc.data()))
          setTableData(snapshot.docs.map(doc => doc.data()))
          console.log("Quantities : ", quantities)
          setQuantities(Array(snapshot.docs.length).fill(0))
        })
        return () => {
            // cleanup
        }
        }, [])

    alertIndex = (index) => {
        Alert.alert(`This is row ${index + 1}`);
      }

      const element = ( index) => (
        // <TouchableOpacity onPress={() => alertIndex(index)}>
        //   <View style={styles.btn}>
        //     <Text style={styles.btnText}>button</Text>
        //   </View>
        // </TouchableOpacity>
        <TextInput
        style={styles.input}
        onChangeText={(text) => {
                var q = quantities
                q[index]=text
                setQuantities([...q])
                console.log("Quantities are now : ", quantities)
            }
        }
        value={quantities[index]?quantities[index].toString():"0"}
        // placeholder="Email"
        />
      );
    

    return (
        <View style={styles.container}>
            <Text>Menu Screen</Text>
            <Table borderStyle={{borderColor: 'transparent'}}>
            <Row data={tableHeaders} style={styles.head} textStyle={styles.text}/>
            {
                tableData.map((rowData, index) => (
                <TableWrapper key={index} style={styles.row}>
                    <Cell key={index+"name"} data={rowData.name} textStyle={styles.text}/>
                    <Cell key={index+"price"} data={rowData.price} textStyle={styles.text}/>
                    <Cell key={index+"quantity"} data={element(index)} textStyle={styles.text}/>
                </TableWrapper>
                ))
            }
            </Table>
        </View>
    )
}

export default MenuScreen

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#808B97' },
    text: { margin: 6 },
    row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
    btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
    btnText: { textAlign: 'center', color: '#fff' }
  });
