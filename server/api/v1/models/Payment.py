from sqlmodel import SQLModel, Field, Relationship
from sqlalchemy import Column, String, table
from api.v1.models.mixins import TimeMixin
from datetime import datetime
from decimal import Decimal
from typing import Optional


class Payment(SQLModel, TimeMixin, table=True):
    __tablename__ = "payments"

    id: int = Field(primary_key=True, nullable=False)
    dates: datetime = Field(sa_column=Column("dates", String, nullable=True))
    amount: Decimal = Field(sa_column=Column("amount", String, nullable=True))
    currency: str = Field(sa_column=Column("currency", String, nullable=True))
    reference: str = Field(sa_column=Column(
        "reference", String, nullable=True))
    transaction_status: str = Field(sa_column=Column(
        "transaction_status", String, nullable=True))

    subscription: Optional["Subscription"] = Relationship(
        back_populates="payment")
