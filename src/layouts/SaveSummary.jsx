import React from 'react'
import { Dropdown, Label } from "semantic-ui-react";
import { useSelector } from 'react-redux';

export default function SaveSummary() {

    const { saveItems } = useSelector(state => state.save)
    return (
        <div>
            <Dropdown item text="Kaydedilenler">
                <Dropdown.Menu>
                    {
                        saveItems.map((saveItem) => (
                            <Dropdown.Item key={saveItem.jobAdvertisement.id}>
                                {saveItem.jobAdvertisement.jobPosition}
                                <Label>
                                    {saveItem.quantity}
                                </Label>
                            </Dropdown.Item>
                        ))
                    }
                    <Dropdown.Divider />
                    <Dropdown.Item>İş ilanları</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}